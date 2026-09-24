module full_adder_3(
    x, y, c_in,
    s, c_out
);
    input [2:0] x, y;
    input c_in;
    output [2:0] s;
    output c_out;

    assign #5 {c_out, s} = x + y + c_in;
endmodule
