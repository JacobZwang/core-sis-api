define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssignmentRecordStatus = void 0;
    var AssignmentRecordStatus;
    (function (AssignmentRecordStatus) {
        AssignmentRecordStatus[AssignmentRecordStatus["Assigned"] = 0] = "Assigned";
        AssignmentRecordStatus[AssignmentRecordStatus["Received"] = 1] = "Received";
        AssignmentRecordStatus[AssignmentRecordStatus["Graded"] = 2] = "Graded";
        AssignmentRecordStatus[AssignmentRecordStatus["Missing"] = 3] = "Missing";
    })(AssignmentRecordStatus = exports.AssignmentRecordStatus || (exports.AssignmentRecordStatus = {}));
});
