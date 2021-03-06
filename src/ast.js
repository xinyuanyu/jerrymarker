(function () {
    var ast = this.yy.ast = {};

    function Node(type) {
        this.type = type;
    }
    ast.ExpressionNode = function ExpressionNode(op, v1, v2) {
        Node.call(this, 'expression');
        this.op = op;
        this.v1 = v1;
        this.v2 = v2;
    };
    ast.ObjectNode = function ObjectNode(op, v1, v2) {
        Node.call(this, 'object');
        this.v1 = v1;
        this.v2 = v2;
        this.op = op;
    };
    ast.IDNode = function IDNode(name) {
        Node.call(this, 'ID');
        this.name = name;
    };
    ast.ContentNode = function ContentNode() {
        Node.call(this, 'content');
        this.v = [];
    };
    ast.LiteralNode = function LiteralNode(v) {
        Node.call(this, 'literal');
        this.v = v;
    };
    ast.InterPolationNode = function InterPolationNode(v) {
        Node.call(this, 'iterpolation');
        this.v = v;
    };
    ast.IFNode = function IFNode(cond, statement, child) {
        Node.call(this, 'if');
        this.cond = cond;
        this.statement = statement;
        this.child = child;
    };
    ast.ListNode = function ListNode(collection, item, statement) {
        Node.call(this, 'list');
        this.collection = collection;
        this.item = item;
        this.statement = statement;
    };
    ast.StatementNode = function StatementNode(op, lv, rv) {
        Node.call(this, 'statement');
        this.op = op;
        this.lv = lv;
        this.rv = rv;
    };
}).call(jerrymarker);
