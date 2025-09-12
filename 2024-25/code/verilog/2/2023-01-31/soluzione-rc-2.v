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
        .x(xl), .y(yl), .c(4'b0000),
        .m(m0)
    );
    wire [3:0] m0h, m0l;
    assign {m0h, m0l} = m0;

    wire [7:0] m1_m0h;
    mul_add_nat ma1(
        .x(xl), .y(yh), .c(m0h),
        .m(m1_m0h)
    );

    wire [7:0] m2;
    mul_add_nat ma2(
        .x(xh), .y(yl), .c(4'b0000),
        .m(m2)
    );

    wire [7:0] s0;
    wire c0;
    add #( .N(8) ) a0 (
        .x(m2), .y(m1_m0h), .c_in(1'b0),
        .s(s0), .c_out(c0)
    );
    wire [3:0] s0h, s0l;
    assign {s0h, s0l} = s0;

    wire [7:0] m3_s0h;
    mul_add_nat ma3(
        .x(xh), .y(yh), .c(s0h),
        .m(m3_s0h)
    );
    wire [3:0] s1h, s1l;
    assign {s1h, s1l} = m3_s0h;

    wire [3:0] s1h_c0;
    add #( .N(4) ) a2 (
        .x(s1h), .y(4'b0), .c_in(c0),
        .s(s1h_c0)
    );

    assign m = {s1h_c0, s1l, s0l, m0l};
    
endmodule