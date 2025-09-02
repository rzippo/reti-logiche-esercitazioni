module testbench();
    reg x_t, y_t; // "variabili"
    wire z_t, w_t;

    RC rc (
        .x(x_t), .y(y_t),
        .z(z_t), .w(w_t)
    );

    initial begin
        $dumpfile("waveform.vcd");
        $dumpvars;

        x_t = 0; 
        y_t = 0;
        #10;
        if (z_t == 0 && w_t == 0)
            $display("0 0 -> 0 0 success");
        else
            $display("0 0 -> 0 0 fail");

        x_t = 0; 
        y_t = 1;
        #10;
        if (z_t == 0 && w_t == 1)
            $display("0 1 -> 0 1 success");
        else
            $display("0 1 -> 0 1 fail");

        x_t = 1; 
        y_t = 0;
        #10;
        if (z_t == 0 && w_t == 1)
            $display("1 0 -> 0 1 success");
        else
            $display("1 0 -> 0 1 fail");

        x_t = 1; 
        y_t = 1;
        #10;
        if (z_t == 1 && w_t == 1)
            $display("1 1 -> 1 1 success");
        else
            $display("1 1 -> 1 1 fail");

    end
endmodule
