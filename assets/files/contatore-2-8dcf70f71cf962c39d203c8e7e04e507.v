module contatore (
    out,
    clock, reset_
);
    output [2:0] out;
    input clock, reset_;

    reg [2:0] OUT;
    assign out = OUT;

//highlight-start
    wire [2:0] next_out;
    assign #2 next_out = OUT + 1;
//highlight-end

    always @(reset_ == 0) begin
        OUT <= 0;
    end

    always @(posedge clock) if (reset_ == 1) #3 begin
//highlight-start
        OUT <= next_out;
//highlight-end        
    end
endmodule
