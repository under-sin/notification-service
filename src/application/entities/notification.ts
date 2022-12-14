import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  private get recipientId(): string {
    return this.props.recipientId;
  }

  private set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  private get content(): Content {
    return this.props.content;
  }

  private set content(content: Content) {
    this.props.content = content;
  }

  private get category(): string {
    return this.props.category;
  }

  private set category(category: string) {
    this.props.category = category;
  }

  private get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  private set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  private get createdAt(): Date | null | undefined {
    return this.props.createdAt;
  }
}
