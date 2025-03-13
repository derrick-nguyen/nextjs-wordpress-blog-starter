This is a blog project build with [Next.js](https://nextjs.org) + WordPress Headless CMS + Tailwind CSS version 4 + Docker Compose

## NextJS 15 + WordPress Headless CMS + Tailwind CSS v4 + Docker Compose

**Required install:**

- Git
- Docker & Docker Compose
- NodeJs >= v.20

First, run the development server:

```bash
git clone https://github.com/derrick-nguyen/nextjs-wordpress-blog-starter.git

cd nextjs-wordpress-blog-starter

docker-compose up -d
```

Open [http://localhost:80](http://localhost:80) with your browser to see the result.

WordPress is on [http://localhost:8080](http://localhost:8080)

## Deploy on AWS EC2

I use **MIN instance** t4g.nano with Amazon Linux 2023, 10GB

```bash
# Install Git
sudo yum install git

# Install Docker
sudo yum install docker

# Install Docker Compose
sudo curl -L https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

# Clone Project
git clone https://github.com/derrick-nguyen/nextjs-wordpress-blog-starter.git

cd nextjs-wordpress-blog-starter

# Run Docker Compose
docker-compose up -d

# Check
docker ps -a
```
