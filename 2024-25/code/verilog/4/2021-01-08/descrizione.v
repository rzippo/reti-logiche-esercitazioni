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
    output [7:0]min;
    output dav_;
    input rfd;
    input clock, reset_;

    reg SOC;
    assign soc = SOC;
    reg [7:0] MIN;
    assign min = MIN;
    reg DAV_;
    assign dav_ = DAV_;

    reg [1:0] STAR;
    localparam 
        S0 = 0,
        S1 = 1,
        S2 = 2,
        S3 = 3;

    wire [7:0] out_rc;
    MINIMO_3 min_rc(
        .a(x1), .b(x2), .c(x3),
        .min(out_rc)
    );

    always @(reset_ == 0) #1 begin
        SOC <= 0;
        DAV_ <= 1;
        STAR <= 0;
    end

    always @(posedge clock) if(reset_ == 1) #3 begin
        casex (STAR)
            S0: begin
                SOC <= 1;
                STAR <= ({eoc1, eoc2, eoc3} == 3'b000) ? S1 : S0;
            end

            S1: begin
                SOC <= 0;
                MIN <= out_rc;
                STAR <= ({eoc1, eoc2, eoc3} == 3'b111) ? S2 : S1;
            end

            S2: begin
                DAV_ <= 0;
                STAR <= (rfd == 1) ? S2 : S3;
            end

            S3: begin
                DAV_ <= 1;
                STAR <= (rfd == 0) ? S3 : S0;
            end

        endcase
    end

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

    wire [7:0] d_out;
    wire b_out;
    diff #( .N(8) ) d(
        .x(a), .y(b), .b_in(1'b0),
        .d(d_out), .b_out(b_out)
    );

    assign min = b_out == 1 ? a : b;    

endmodule
