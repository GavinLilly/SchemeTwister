{
  pkgs,
  lib,
  config,
  ...
}:
{
  languages = {
    javascript = {
      enable = true;
      package = pkgs.nodejs-slim_22;
      pnpm.enable = true;
    };
    typescript.enable = true;

    java.enable = true;
  };

  devcontainer = {
    enable = true;
    settings = {
      customizations.vscode = {
        extensions = [
          "ms-vscode-remote.remote-containers"
          "sonarsource.sonarlint-vscode"
          "nrwl.angular-console"
          "angular.ng-template"
          "esbenp.prettier-vscode"
          "knisterpeter.vscode-commitizen"
          "firsttris.vscode-jest-runner"
          "dbaeumer.vscode-eslint"
        ];

        settings = {
          "sonarlint.pathToNodeExecutable" = "${config.languages.javascript.package}/bin/node";
        };
      };
    };
  };
}
