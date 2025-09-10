export class Html5QrcodeStrings {
    static codeParseError(exception) {
        return `QR code parse error, error = ${exception}`;
    }
    static errorGettingUserMedia(error) {
        return `Error getting userMedia, error = ${error}`;
    }
    static onlyDeviceSupportedError() {
        return "The device doesn't support navigator.mediaDevices , only " + "supported cameraIdOrConfig in this case is deviceId parameter " + "(string).";
    }
    static cameraStreamingNotSupported() {
        return "Camera streaming not supported by the browser.";
    }
    static unableToQuerySupportedDevices() {
        return "Unable to query supported devices, unknown error.";
    }
    static insecureContextCameraQueryError() {
        return "Camera access is only supported in secure context like https " + "or localhost.";
    }
    static scannerPaused() {
        return "Scanner paused";
    }
}
export class Html5QrcodeScannerStrings {
    static scanningStatus() {
        return "Scannen";
    }
    static idleStatus() {
        return "Idle";
    }
    static errorStatus() {
        return "Fehler";
    }
    static permissionStatus() {
        return "Erlaubnis";
    }
    static noCameraFoundErrorStatus() {
        return "Keine Kameras";
    }
    static lastMatch(decodedText) {
        return `Last Match: ${decodedText}`;
    }
    static codeScannerTitle() {
        return "Code Scanner";
    }
    static cameraPermissionTitle() {
        return "Kamera erlauben";
    }
    static cameraPermissionRequesting() {
        return "Requesting camera permissions...";
    }
    static noCameraFound() {
        return "Keine Kamera gefunden";
    }
    static scanButtonStopScanningText() {
        return "Scannen stoppen";
    }
    static scanButtonStartScanningText() {
        return "Scannen starten";
    }
    static torchOnButton() {
        return "Fackel einschalten";
    }
    static torchOffButton() {
        return "Fackel ausschalten";
    }
    static torchOnFailedMessage() {
        return "Brenner konnte nicht eingeschaltet werden";
    }
    static torchOffFailedMessage() {
        return "Fackel nicht ausgeschaltet";
    }
    static scanButtonScanningStarting() {
        return "Starten der Kamera...";
    }
    static textIfCameraScanSelected() {
        return "Scannen einer Bilddatei";
    }
    static textIfFileScanSelected() {
        return "Direktes Scannen mit der Kamera";
    }
    static selectCamera() {
        return "Kamera wählen";
    }
    static fileSelectionChooseImage() {
        return "Bild auswählen";
    }
    static fileSelectionChooseAnother() {
        return "Wählen Sie eine andere";
    }
    static fileSelectionNoImageSelected() {
        return "Kein Bild ausgewählt";
    }
    static anonymousCameraPrefix() {
        return "Anonymous Camera";
    }
    static dragAndDropMessage() {
        return "Oder legen Sie ein Bild zum Scannen ab";
    }
    static dragAndDropMessageOnlyImages() {
        return "Oder legen Sie ein Bild zum Scannen ab (andere Dateien werden nicht unterstützt)";
    }
    static zoom() {
        return "zoom";
    }
    static loadingImage() {
        return "Bild laden...";
    }
    static cameraScanAltText() {
        return "Kamerabasierter Scan";
    }
    static fileScanAltText() {
        return "Dateibasierter Scan";
    }
}
export class LibraryInfoStrings {
    static poweredBy() {
        return "Powered by ";
    }
    static reportIssues() {
        return "Report issues";
    }
}
//# sourceMappingURL=strings.js.map