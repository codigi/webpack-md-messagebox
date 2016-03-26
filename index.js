var $mdDialog = require("webpack-mddialog-bootstrap");

module.exports = function(title, message) {
    $mdDialog.show($mdDialog.alert({
        template: '<md-dialog><md-toolbar><div class="md-toolbar-tools"><h2>'+title+'</h2></div></md-toolbar><md-dialog-content layout-padding>'+message+'</md-dialog-content><md-dialog-actions layout-padding><md-button class="md-raised md-primary md-hue-3" blur-on-focus ng-click="dialog.hide()">OK</md-button></md-dialog-actions></md-dialog>',
        skipHide: true,
        escapeToClose: true,
        clickOutsideToClose: false,
        focusOnOpen: false
    }));
};
