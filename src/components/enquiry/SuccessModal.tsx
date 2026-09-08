import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '../common/Button';
import type { EnquirySubmission } from '../../types';

export interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  submission: EnquirySubmission | null;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  submission,
}) => {
  if (!isOpen || !submission) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-corporate-navy/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-lg shadow-elevated border border-slate-200 max-w-lg w-full p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-md focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>

          <h3 id="modal-headline" className="text-2xl font-bold text-corporate-navy">
            Enquiry Received
          </h3>

          <p className="text-sm text-corporate-text-muted leading-relaxed max-w-sm mx-auto">
            Thank you for sharing your requirement. This concept demonstrates how customer requests can be captured through the digital interface.
          </p>
        </div>

        {/* Captured details preview */}
        <div className="mt-6 p-4 rounded-md bg-slate-50 border border-slate-200 text-xs space-y-2">
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-500 font-medium">Contact Name:</span>
            <span className="font-semibold text-corporate-navy">{submission.name}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-500 font-medium">Phone / WhatsApp:</span>
            <span className="font-semibold text-corporate-navy">{submission.phone}</span>
          </div>
          {submission.company && (
            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500 font-medium">Company:</span>
              <span className="font-semibold text-corporate-navy">{submission.company}</span>
            </div>
          )}
          {submission.product && (
            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500 font-medium">Selected Product:</span>
              <span className="font-semibold text-corporate-gold-muted">{submission.product}</span>
            </div>
          )}
          {submission.quantity && (
            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500 font-medium">Quantity:</span>
              <span className="font-semibold text-corporate-navy">{submission.quantity}</span>
            </div>
          )}
          <div className="pt-1">
            <span className="text-slate-500 font-medium block mb-1">Requirement Notes:</span>
            <p className="text-corporate-text bg-white p-2 rounded border border-slate-200 text-xs line-clamp-3">
              {submission.requirement}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Button
            variant="primary"
            fullWidth
            onClick={onClose}
            className="py-3 text-sm font-semibold uppercase tracking-wider"
          >
            Continue Browsing
          </Button>
        </div>
      </div>
    </div>
  );
};
