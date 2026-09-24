module RC(x, y, z, w);

input x, y;
output z, w;

assign #1 z = x | y; 
assign #2 w = x & y; 

endmodule
