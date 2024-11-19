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

    wire [3:0] next_count_s0;
    assign #2 next_count_s0 = COUNT - 1;

    wire next_star_s0;
    assign #2 next_star_s0 = (COUNT == 1) ? S1 : S0;
    
    always @(posedge clock) if (reset_ == 1) #3 begin
        casex (STAR)
            S0: begin
                COUNT <= next_count_s0;
                OUT <= 1;
                STAR <= next_star_s0;
            end

            S1: begin
                COUNT <= N;
                OUT <= 0;
                STAR <= S0;
            end
        endcase
    end
endmodule