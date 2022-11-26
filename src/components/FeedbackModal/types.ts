export interface FeedbackModalStyledProps {
  isError?: boolean;
}

export interface FeedbackModalProps extends FeedbackModalStyledProps {
  title: string;
  content: string;
  closeAction: () => void;
}
