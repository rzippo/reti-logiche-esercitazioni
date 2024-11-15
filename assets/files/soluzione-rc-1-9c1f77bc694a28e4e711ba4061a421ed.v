// x naturale su 8 bit
// y naturale su 8 bit
// m = x * y, su 16 bit
module MUL8(x, y, m);
    input [7:0] x;
    input [7:0] y;
    output [15:0] m;   

    wire [3:0] xh, xl;
    assign {xh, xl} = x;
    wire [3:0] yh, yl;
    assign {yh, yl} = y;
    
    wire [7:0] m0;
    mul_add_nat ma0(
        .x(xl), .y(yl), .c(4'h0),
        .m(m0)
    );
    wire [15:0] m0e = {8'h00, m0};

    wire [7:0] m1;
    mul_add_nat ma1(
        .x(xl), .y(yh), .c(4'h0),
        .m(m1)
    );
    wire [15:0] m1e = {4'h0, m1, 4'h0};

    wire [7:0] m2;
    mul_add_nat ma2(
        .x(xh), .y(yl), .c(4'h0),
        .m(m2)
    );
    wire [15:0] m2e = {4'h0, m2, 4'h0};

    wire [7:0] m3;
    mul_add_nat ma3(
        .x(xh), .y(yh), .c(4'h0),
        .m(m3)
    );
    wire [15:0] m3e = {m3, 8'h00};


    wire [15:0] s0;
    add #( .N(16) ) a0 (
        .x(m0e), .y(m1e), .c_in(1'b0),
        .s(s0)
    );

    wire [15:0] s1;
    add #( .N(16) ) a1 (
        .x(m2e), .y(m3e), .c_in(1'b0),
        .s(s1)
    );

    add #( .N(16) ) a2 (
        .x(s0), .y(s1), .c_in(1'b0),
        .s(m)
    );

endmodule