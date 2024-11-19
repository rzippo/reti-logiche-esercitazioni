module ABC(
    a, b, p,
    dav_, rfd,
    clock, reset_
);
    input [3:0] a, b;
    output [5:0] p;

    input dav_;
    output rfd;

    input clock, reset_;

    reg [5:0] P;
    assign p = P;

    reg RFD;
    assign rfd = RFD;

    reg [3:0] A, B;

    wire [5:0] out_rc;
    PERIMETRO_RC rc(
        .a(A), .b(B),
        .p(out_rc)
    );

    reg [2:0] STAR;
    localparam 
        S0 = 0, 
        S1 = 1,
        S2 = 2, 
        S3 = 3;
    
    always @(reset_ == 0) begin
        RFD <= 1;
        P <= 0;
        STAR <= S0;
    end

    always @(posedge clock) if (reset_ == 1) #3 begin
        casex (STAR)
            S0: begin
                A <= a;
                B <= b;
                STAR <= (dav_ == 0) ? S1 : S0;
            end 

            S1: begin
                // P <= 2 * (A + B);
                P <= out_rc;
                STAR <= S2;           
            end  

            S2: begin
                RFD <= 0;
                STAR <= (dav_ == 1) ? S3 : S2;
            end

            S3: begin
                RFD <= 1;
                STAR <= S0;
            end
        endcase
    end

endmodule

module PERIMETRO_RC(
    a, b,
    p
);
    input [3:0] a, b;
    output [5:0] p;

    wire [4:0] somma;
    add #( .N(4) ) adder(
        .x(a), .y(b), .c_in(1'b0),
        .s(somma[3:0]), .c_out(somma[4])
    );

    assign p = { somma[3:0], 1'b0 };

endmodule