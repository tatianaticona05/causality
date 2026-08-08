import * as vscode from 'vscode';
import type { HealthStatus } from '@causality/shared';

export function activate(context: vscode.ExtensionContext): void {
  const health: HealthStatus = { status: 'ok', service: 'extension' };

  context.subscriptions.push(
    vscode.commands.registerCommand('causality.helloWorld', () => {
      vscode.window.showInformationMessage(`Causality extension: ${health.status}`);
    }),
  );
}

export function deactivate(): void {}
