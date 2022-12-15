import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
  content: string;
  category: string;
  recipientId: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    // sempre que possível retornar um objeto
    return {
      notification,
    };
  }
}
