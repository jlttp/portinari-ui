import { Component } from '@angular/core';

import { PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'app-logged-toolbar',
  templateUrl: './logged-toolbar.component.html',
  providers: [PoNotificationService]
})
export class LoggedToolbarComponent {
  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-news',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: (item: PoToolbarAction) => this.onClickNotification(item)
    },
    { icon: 'po-icon-message', label: 'New message', type: 'danger', action: (item: PoToolbarAction) => this.openDialog(item) }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'User data', action: (item: PoToolbarAction) => this.showAction(item) },
    { icon: 'po-icon-company', label: 'Company data', action: (item: PoToolbarAction) => this.showAction(item) },
    { icon: 'po-icon-settings', label: 'Settings', action: (item: PoToolbarAction) => this.showAction(item) },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: (item: PoToolbarAction) => this.showAction(item) }
  ];

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: (item: PoToolbarAction) => this.showAction(item) },
    { label: 'Finalize cash register', action: (item: PoToolbarAction) => this.showAction(item) },
    { label: 'Cash register options', action: (item: PoToolbarAction) => this.showAction(item) }
  ];

  title: string = 'PO Toolbar Logged';

  constructor(private poDialog: PoDialogService, private poNotification: PoNotificationService) {}

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');

    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Welcome',
      message: `Hello Mr. Dev! Congratulations, you are a TOTVER!`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
  }
}
