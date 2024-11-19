module out_n_clock(
    out,
    clock, reset_
);
    output out;
    input clock, reset_;

    reg OUT;
    assign out = OUT;

    localparam N = 3;
    reg [3:0] COUNT;

    reg STAR;
    localparam S0 = 0, S1 = 1;

    always @(reset_ == 0) begin
        COUNT <= N;
        OUT <= 0;
        STAR <= S0;
    end
    
    always @(posedge clock) if (reset_ == 1) #3 begin
        casex (STAR)
            S0: begin
                COUNT <= COUNT - 1;
                OUT <= 1;
                STAR <= (COUNT == 1) ? S1 : S0;
            end

            S1: begin
                COUNT <= N;
                OUT <= 0;
                STAR <= S0;
            end
        endcase
    end
endmodule