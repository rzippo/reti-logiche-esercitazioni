module ABC(
    x1, x2, x3,
    eoc1, eoc2, eoc3,
    soc,
    min, dav_, rfd,
    clock, reset_
);
    input [7:0] x1, x2, x3;
    input eoc1, eoc2, eoc3;
    output soc;
    output [7:0] min;
    output dav_;
    input rfd;
    input clock, reset_;

    wire b4, b3, b2, b1, b0;
    wire c2, c1, c0;

    ABC_PO po(
        x1, x2, x3,
        eoc1, eoc2, eoc3,
        soc,
        min, dav_, rfd,
        b4, b3, b2, b1, b0,
        c2, c1, c0
        clock, reset_,
    );

    ABC_PC pc(
        b4, b3, b2, b1, b0,
        c2, c1, c0
        clock, reset_,
    );
endmodule

module ABC_PO(
    x1, x2, x3,
    eoc1, eoc2, eoc3,
    soc,
    min, dav_, rfd,
    b4, b3, b2, b1, b0,
    c2, c1, c0
    clock, reset_,
);
    input [7:0] x1, x2, x3;
    input eoc1, eoc2, eoc3;
    output soc;
    output [7:0] min;
    output dav_;
    input rfd;
    input clock, reset_;

    reg SOC;
    assign soc = SOC;
    reg [7:0] MIN;
    assign min = MIN;
    reg DAV_;
    assign dav_ = DAV_;

    wire [7:0] out_rc;
    MINIMO_3 min_rc(
        .a(x1), .b(x2), .c(x3),
        .min(out_rc)
    );

    input b4, b3, b2, b1, b0;
    output c2, c1, c0;

    assign #1 c0 = ~eoc1 & ~eoc2 & ~eoc3;
    assign #1 c1 = eoc1 & eoc2 & eoc3;
    assign #1 c2 = rfd;

    always @(reset_ == 0) #1 SOC <= 0;
    always @(posedge clock) if(reset_ == 1) #3 begin
        casex ({b1, b0})
            2'b00: SOC <= 1;
            2'b01: SOC <= 0;
            2'b1X: SOC <= SOC;
        endcase
    end

    always @(reset_ == 0) #1 DAV_ <= 1;
    always @(posedge clock) if(reset_ == 1) #3 begin
        casex ({b3, b2})
            2'b00: DAV_ <= DAV_;
            2'b01: DAV_ <= 0;
            2'b1X: DAV_ <= 1;
        endcase
    end

    always @(posedge clock) if(reset_ == 1) #3 begin
        casex (b4)
            1'b0: MIN <= MIN;
            1'b1: MIN <= out_rc;
        endcase
    end
endmodule

module ABC_PC(
    b4, b3, b2, b1, b0,
    c2, c1, c0
    clock, reset_,
);
    input clock, reset_;

    output b4, b3, b2, b1, b0;
    input c2, c1, c0;

    reg [1:0] STAR;
    localparam 
        S0 = 0,
        S1 = 1,
        S2 = 2,
        S3 = 3;

    assign #1 {b4, b3, b2, b1, b0} =
        (STAR == S0) ? 5'b00000 :
        (STAR == S1) ? 5'b10001 :
        (STAR == S2) ? 5'b0011X :
        (STAR == S3) ? 5'b01X1X :
        /*default*/    5'bXXXXX ;

    always @(reset_ == 0) #1 STAR <= 0;
    always @(posedge clock) if(reset_ == 1) #3 begin
        casex (STAR)
            S0: STAR <= c0 ? S1 : S0;
            S1: STAR <= c1 ? S2 : S1;
            S2: STAR <= c2 ? S2 : S3;
            S3: STAR <= c2 ? S0 : S3;
        endcase
    end

    /*
        S0 = 00, S1 = 01, S2 = 10, S3 = 11
        c0 = 00, c1 = 01, c2 = 1X

        M-addr  b4, b3, b2, b1, b0  c_eff   M-addr-T    M-addr-F
        00      00000               00      01          00
        01      01100               01      10          01      
        10      1X001               1X      10          11
        11      1X01X               1X      00          11
    */

endmodule

// descrizione: non sara' valutata
// module MINIMO_3(
//     a, b, c,
//     min
// );
//     input [7:0] a, b, c;
//     output [7:0] min;

//     assign #2 min = (a >= b) ? ((b >= c) ? c : b )
//                              : ((a >= c) ? c : a );

// endmodule

module MINIMO_3(
    a, b, c,
    min
);
    input [7:0] a, b, c;
    output [7:0] min;

    // min_3(a, b, c) = min_2( min_2(a, b), c );

    wire [7:0] m_ab_out;
    MINIMO_2 m_ab(
        .a(a), .b(b),
        .min(m_ab_out)
    );

    MINIMO_2 m_abc(
        .a(m_ab_out), .b(c),
        .min(min)
    );
endmodule

module MINIMO_2(
    a, b,
    min
);
    input [7:0] a, b;
    output [7:0] min;

    wire b_out;
    diff #( .N(8) ) d(
        .x(a), .y(b), .b_in(1'b0),
        .b_out(b_out)
    );

    assign #1 min = b_out ? a : b;
endmodule
