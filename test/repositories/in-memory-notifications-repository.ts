import { Notification } from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

// essa parte está funcionando como se fosse a camada de persistência ao banco de dados
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
