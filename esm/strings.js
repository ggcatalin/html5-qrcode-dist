var Html5QrcodeStrings = (function () {
    function Html5QrcodeStrings() {
    }
    Html5QrcodeStrings.codeParseError = function (exception) {
        return "QR code parse error, error = " + exception;
    };
    Html5QrcodeStrings.errorGettingUserMedia = function (error) {
        return "Error getting userMedia, error = " + error;
    };
    Html5QrcodeStrings.onlyDeviceSupportedError = function () {
        return "The device doesn't support navigator.mediaDevices , only " + "supported cameraIdOrConfig in this case is deviceId parameter " + "(string).";
    };
    Html5QrcodeStrings.cameraStreamingNotSupported = function () {
        return "Camera streaming not supported by the browser.";
    };
    Html5QrcodeStrings.unableToQuerySupportedDevices = function () {
        return "Unable to query supported devices, unknown error.";
    };
    Html5QrcodeStrings.insecureContextCameraQueryError = function () {
        return "Camera access is only supported in secure context like https " + "or localhost.";
    };
    Html5QrcodeStrings.scannerPaused = function () {
        return "Scanner paused";
    };
    return Html5QrcodeStrings;
}());
export { Html5QrcodeStrings };
var Html5QrcodeScannerStrings = (function () {
    function Html5QrcodeScannerStrings() {
    }
    Html5QrcodeScannerStrings.scanningStatus = function () {
        return "Scannen";
    };
    Html5QrcodeScannerStrings.idleStatus = function () {
        return "Idle";
    };
    Html5QrcodeScannerStrings.errorStatus = function () {
        return "Fehler";
    };
    Html5QrcodeScannerStrings.permissionStatus = function () {
        return "Erlaubnis";
    };
    Html5QrcodeScannerStrings.noCameraFoundErrorStatus = function () {
        return "Keine Kameras";
    };
    Html5QrcodeScannerStrings.lastMatch = function (decodedText) {
        return "Last Match: " + decodedText;
    };
    Html5QrcodeScannerStrings.codeScannerTitle = function () {
        return "Code Scanner";
    };
    Html5QrcodeScannerStrings.cameraPermissionTitle = function () {
        return "Kamera erlauben";
    };
    Html5QrcodeScannerStrings.cameraPermissionRequesting = function () {
        return "Requesting camera permissions...";
    };
    Html5QrcodeScannerStrings.noCameraFound = function () {
        return "Keine Kamera gefunden";
    };
    Html5QrcodeScannerStrings.scanButtonStopScanningText = function () {
        return "Scannen stoppen";
    };
    Html5QrcodeScannerStrings.scanButtonStartScanningText = function () {
        return "Scannen starten";
    };
    Html5QrcodeScannerStrings.torchOnButton = function () {
        return "Fackel einschalten";
    };
    Html5QrcodeScannerStrings.torchOffButton = function () {
        return "Fackel ausschalten";
    };
    Html5QrcodeScannerStrings.torchOnFailedMessage = function () {
        return "Brenner konnte nicht eingeschaltet werden";
    };
    Html5QrcodeScannerStrings.torchOffFailedMessage = function () {
        return "Fackel nicht ausgeschaltet";
    };
    Html5QrcodeScannerStrings.scanButtonScanningStarting = function () {
        return "Starten der Kamera...";
    };
    Html5QrcodeScannerStrings.textIfCameraScanSelected = function () {
        return "Scannen einer Bilddatei";
    };
    Html5QrcodeScannerStrings.textIfFileScanSelected = function () {
        return "Direktes Scannen mit der Kamera";
    };
    Html5QrcodeScannerStrings.selectCamera = function () {
        return "Kamera wählen";
    };
    Html5QrcodeScannerStrings.fileSelectionChooseImage = function () {
        return "Bild auswählen";
    };
    Html5QrcodeScannerStrings.fileSelectionChooseAnother = function () {
        return "Wählen Sie eine andere";
    };
    Html5QrcodeScannerStrings.fileSelectionNoImageSelected = function () {
        return "Kein Bild ausgewählt";
    };
    Html5QrcodeScannerStrings.anonymousCameraPrefix = function () {
        return "Anonymous Camera";
    };
    Html5QrcodeScannerStrings.dragAndDropMessage = function () {
        return "Oder legen Sie ein Bild zum Scannen ab";
    };
    Html5QrcodeScannerStrings.dragAndDropMessageOnlyImages = function () {
        return "Oder legen Sie ein Bild zum Scannen ab (andere Dateien werden nicht unterstützt)";
    };
    Html5QrcodeScannerStrings.zoom = function () {
        return "zoom";
    };
    Html5QrcodeScannerStrings.loadingImage = function () {
        return "Bild laden...";
    };
    Html5QrcodeScannerStrings.cameraScanAltText = function () {
        return "Kamerabasierter Scan";
    };
    Html5QrcodeScannerStrings.fileScanAltText = function () {
        return "Dateibasierter Scan";
    };
    return Html5QrcodeScannerStrings;
}());
export { Html5QrcodeScannerStrings };
var LibraryInfoStrings = (function () {
    function LibraryInfoStrings() {
    }
    LibraryInfoStrings.poweredBy = function () {
        return "Powered by ";
    };
    LibraryInfoStrings.reportIssues = function () {
        return "Report issues";
    };
    return LibraryInfoStrings;
}());
export { LibraryInfoStrings };
//# sourceMappingURL=strings.js.map