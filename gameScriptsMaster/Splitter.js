class Splitter
{
	constructor(img, x, y, frameX, frameW, frameH, speed, dir, numsplits, delay)
	{
		this.img=img;
		this.x=x;
		this.y=y;
		this.frameX=frameX;
		this.frameW=frameW;
		this.frameH=frameH;
		this.speed=speed;
		this.dir=dir;
		this.numsplits=numsplits;
        this.delay=delay;
	}
	animate(timing)
	{
		if(timing%6==0)
		{
			this.frameX++;
			if(this.frameX>1)
				this.frameX=0;
		}
	}
	move()
	{   
		this.y = this.y+(this.speed*this.dir);
	}
	draw(ctx)
	{
		ctx.beginPath();
			ctx.drawImage(this.img, this.frameX*this.frameW, 0, this.frameW, this.frameH, this.x, this.y, 100, 100);
		ctx.closePath();
	}
}