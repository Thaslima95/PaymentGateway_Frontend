module.exports = function () {
  var incomeService = require("../service/IncomeService");

  this.addIncomeController = async (req, callback) => {
    var response = {};
    var addIncomeServiceObject = new incomeService();
    var addIncomeService = await addIncomeServiceObject.addIncomeService(req);
    if (addIncomeService.error == "true") {
      response.error = "true";
      response.message = addIncomeService.message;
      response.status = addIncomeService.status;
    } else {
      response.error = "false";
      response.message = addIncomeService.message;
      response.data = addIncomeService.result;
      response.status = addIncomeService.status;
    }

    callback(response);
  };

  this.getTotalIncomeController = async (req, callback) => {
    var response = {};
    var addIncomeServiceObject = new incomeService();
    var addIncomeService = await addIncomeServiceObject.getTotalIncomeService(
      req
    );

    if (addIncomeService.error == "true") {
      response.error = "true";
      response.message = addIncomeService.message;
      response.status = addIncomeService.status;
    } else {
      response.error = "false";
      response.data = addIncomeService.data;
    }

    callback(response);
  };

  this.updateIncomeController = async (req, callback) => {
    var response = {};
    var addIncomeServiceObject = new incomeService();
    var addIncomeService = await addIncomeServiceObject.updateIncomeService(
      req
    );
    if (addIncomeService.error == "true") {
      response.error = "true";
      response.message = addIncomeService.message;
      response.status = addIncomeService.status;
    } else {
      response.error = "false";
      response.message = addIncomeService.message;
      response.data = addIncomeService.result;
      response.status = addIncomeService.status;
    }

    callback(response);
  };

  this.deleteIncomeController = async (req, callback) => {
    var response = {};
    var addIncomeServiceObject = new incomeService();
    var addIncomeService = await addIncomeServiceObject.deleteIncomeService(
      req
    );
    if (addIncomeService.error == "true") {
      response.error = "true";
      response.message = addIncomeService.message;
      response.status = addIncomeService.status;
    } else {
      response.error = "false";
      response.message = addIncomeService.message;
      response.data = addIncomeService.result;
      response.status = addIncomeService.status;
    }

    callback(response);
  };

  this.getTotalIncomeController = async (req, callback) => {
    var response = {};
    var addIncomeServiceObject = new incomeService();
    var addIncomeService = await addIncomeServiceObject.getTotalIncomeService(
      req
    );

    if (addIncomeService.error == "true") {
      response.error = "true";
      response.message = addIncomeService.message;
      response.status = addIncomeService.status;
    } else {
      response.error = "false";
      response.data = addIncomeService.data;
    }

    callback(response);
  };

  this.getUnpaidTotalIncomeController = async (req, callback) => {
    var response = {};
    var addIncomeServiceObject = new incomeService();
    var addIncomeService =
      await addIncomeServiceObject.getUnpaidTotalIncomeService(req);

    if (addIncomeService.error == "true") {
      response.error = "true";
      response.message = addIncomeService.message;
      response.status = addIncomeService.status;
    } else {
      response.error = "false";
      response.data = addIncomeService.data;
    }

    callback(response);
  };

  this.getListIncomeController = async (req, callback) => {
    var response = {};
    var addIncomeServiceObject = new incomeService();
    var addIncomeService = await addIncomeServiceObject.getListIncomeService(
      req
    );

    if (addIncomeService.error == "true") {
      response.error = "true";
      response.message = addIncomeService.message;
      response.status = addIncomeService.status;
    } else {
      response.error = "false";
      response.data = addIncomeService.data;
    }

    callback(response);
  };

  this.generateInvoiceController = async (req, callback) => {
    var response = {};
    var addIncomeServiceObject = new incomeService();
    var addIncomeService = await addIncomeServiceObject.generateInvoiceService(
      req
    );
    if (addIncomeService.error == "true") {
      response.error = "true";
      response.message = addIncomeService.message;
      response.status = addIncomeService.status;
    } else {
      response.error = "false";
      response.message = addIncomeService.message;
      response.fileName = addIncomeService.fileName;
      response.status = addIncomeService.status;
    }

    callback(response);
  };

  this.generateReceiptController = async (req, callback) => {
    var response = {};
    var addIncomeServiceObject = new incomeService();
    var addIncomeService = await addIncomeServiceObject.generateReceiptService(
      req
    );
    if (addIncomeService.error == "true") {
      response.error = "true";
      response.message = addIncomeService.message;
      response.status = addIncomeService.status;
    } else {
      response.error = "false";
      response.message = addIncomeService.message;
      response.fileName = addIncomeService.fileName;
      response.status = addIncomeService.status;
    }

    callback(response);
  };
};
