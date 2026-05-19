"use client";

import { useState } from "react";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import { Mail, Phone, User, Calendar, Clock, MessageSquare, CheckCircle, Reply, Send } from "lucide-react";
import axiosInstance from "@/lib/axios";

export default function ContactViewModal({ inquiry, onClose, onMarkAsRead, onMarkAsReplied, onRefresh }) {
  const [replyEmail, setReplyEmail] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [sendingReply, setSendingReply] = useState(false);

  if (!inquiry) return null;

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSendReply = async () => {
    if (!replyEmail.trim()) return;
    
    setSendingReply(true);
    try {
      // API call to send email reply
      await axiosInstance.post(`/contact/${inquiry._id}/reply`, {
        message: replyEmail,
        userEmail: inquiry.email,
        userName: inquiry.fullName
      });
      
      await onMarkAsReplied();
      setShowReplyForm(false);
      setReplyEmail("");
      onRefresh();
      alert("Reply sent successfully!");
    } catch (error) {
      console.error("Failed to send reply:", error);
      alert("Failed to send reply. Please try again.");
    } finally {
      setSendingReply(false);
    }
  };

  return (
    <ViewModal title="Inquiry Details" onClose={onClose}>
      {/* Header with Status */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2">
          {!inquiry.isRead && (
            <button
              onClick={onMarkAsRead}
              className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium"
            >
              <CheckCircle className="w-3 h-3" />
              Mark as Read
            </button>
          )}
          {!inquiry.isReplied && (
            <button
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-medium"
            >
              <Reply className="w-3 h-3" />
              Reply
            </button>
          )}
        </div>
        <div className="text-xs text-gray-400">
          Received {formatDate(inquiry.createdAt)}
        </div>
      </div>

      {/* Customer Info */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">Name:</span>
            <span className="text-gray-600">{inquiry.fullName}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">Email:</span>
            <a href={`mailto:${inquiry.email}`} className="text-blue-600 hover:underline">
              {inquiry.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">Phone:</span>
            <a href={`tel:${inquiry.phone}`} className="text-blue-600 hover:underline">
              {inquiry.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">Travel Date:</span>
            <span className="text-gray-600">
              {inquiry.travelDate ? new Date(inquiry.travelDate).toLocaleDateString() : "Not specified"}
            </span>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="w-4 h-4 text-blue-600" />
          <span className="font-medium text-gray-700">Message:</span>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700 whitespace-pre-wrap">{inquiry.message}</p>
        </div>
      </div>

      {/* Reply Status */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-500">
            {inquiry.isReplied 
              ? `Replied on ${formatDate(inquiry.repliedAt)}` 
              : "Not replied yet"}
          </span>
        </div>
        {inquiry.isReplied && (
          <span className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 rounded-lg text-xs">
            <CheckCircle className="w-3 h-3" />
            Replied
          </span>
        )}
      </div>

      {/* Reply Form */}
      {showReplyForm && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quick Reply
          </label>
          <textarea
            value={replyEmail}
            onChange={(e) => setReplyEmail(e.target.value)}
            placeholder="Type your reply here..."
            rows={4}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleSendReply}
              disabled={sendingReply || !replyEmail.trim()}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {sendingReply ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Reply
                </>
              )}
            </button>
            <button
              onClick={() => setShowReplyForm(false)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </ViewModal>
  );
}