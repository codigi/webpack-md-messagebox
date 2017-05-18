var $mdDialog = require("webpack-mddialog-bootstrap");

module.exports = function(title, message) {
    $mdDialog.show($mdDialog.alert({
        template:
                '<md-dialog>'+
                    '<form ng-submit="dialog.hide()">'+
                        '<md-toolbar><div class="md-toolbar-tools"><h2>'+title+'</h2></div></md-toolbar>'+
                        '<md-dialog-content layout-padding>'+message+'</md-dialog-content>'+
                        '<md-dialog-actions layout-padding>'+
                            '<input style="position: absolute; top: -9999px; left: -9999px;" tabindex="-1" autofocus type="text">'+
                            '<md-button type="submit" class="md-raised md-primary md-hue-3" blur-on-focus ng-click="dialog.hide()">OK</md-button>'+
                        '</md-dialog-actions>'+
                    '</form>'+
                '</md-dialog>',
        skipHide: true,
        escapeToClose: true,
        clickOutsideToClose: false,
        focusOnOpen: false
    }));
};
