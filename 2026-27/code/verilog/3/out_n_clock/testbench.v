module testbench();
    reg reset_;
    
    wire clock;
    clock_generator clk(
        .clock(clock)
    );

    wire out;

    // device under test
    out_n_clock dut(      
        .out(out),
        .clock(clock), .reset_(reset_)
    );

    initial begin
        $dumpfile("waveform.vcd");
        $dumpvars;

        reset_ = 0;
        #(2*clk.HALF_PERIOD);
        reset_ = 1;

        #(15*2*clk.HALF_PERIOD);

        $finish;
    end

endmodule

module clock_generator(
    clock
);
    output clock;

    parameter HALF_PERIOD = 5;

    reg CLOCK;
    assign clock = CLOCK;

    initial CLOCK <= 0;
    always #HALF_PERIOD CLOCK <= ~CLOCK;

endmodule