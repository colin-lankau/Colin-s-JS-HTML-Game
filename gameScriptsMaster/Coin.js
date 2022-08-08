class Coin
{
	constructor(img, x, y, frameX, frameW, frameH)
	{
		this.img=img;
		this.x=x;
		this.y=y;
		this.frameX=frameX;
		this.frameW=frameW;
		this.frameH=frameH;
	}
	animate(timing)
	{
		if(timing%10==0)
		{
			this.frameX%=5;
			this.frameX++;
		}
	}
	draw(ctx)
	{
		ctx.beginPath();
			ctx.drawImage(this.img, this.frameX*this.frameW, 0, this.frameW, this.frameH, this.x, this.y, 42, 42);
		ctx.closePath();
	}
}