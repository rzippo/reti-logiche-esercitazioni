module contatore (
    out,
    clock, reset_
);
    output [2:0] out;
    input clock, reset_;

    reg [2:0] OUT;
    assign out = OUT;

    wire [2:0] next_out;
    assign #2 next_out = OUT + 1;

    always @(reset_ == 0) begin
        OUT <= 0;
    end

    always @(posedge clock) if (reset_ == 1) #3 begin
        OUT <= next_out;
    end
endmodule
