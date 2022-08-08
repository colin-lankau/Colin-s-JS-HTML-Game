class Heart
{
	constructor(img, x, y, frameX, frameW, frameH, dir)
	{
		this.img=img;
		this.x=x;
		this.y=y;
		this.frameX=frameX;
		this.frameW=frameW;
		this.frameH=frameH;
		this.dir=dir;
	}
	animate(timing)
	{
		if(timing%20==0)
		{
			this.frameX++;
			if(this.frameX>1)
				this.frameX=0;
		}
	}
	move()
	{
		this.x= this.x+(2*this.dir);
	}
	draw(ctx)
	{
		ctx.beginPath();
			ctx.drawImage(this.img, this.frameX*this.frameW, 0, this.frameW, this.frameH, this.x, this.y, 50, 48);
		ctx.closePath();
	}
}