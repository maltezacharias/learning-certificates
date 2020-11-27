FROM php:7.4-cli

RUN apt-get update && apt-get install -y wget git unzip             &&\
    sh -c "curl -sL https://deb.nodesource.com/setup_14.x | bash -" &&\
    apt-get install -y nodejs libicu-dev                            &&\
    npm install -g yarn                                             &&\
    docker-php-ext-install mysqli                                   &&\
    docker-php-ext-install intl


WORKDIR /learning-certificates
COPY scripts scripts
RUN scripts/composer-install.sh

COPY composer.json composer.lock ./
RUN php composer.phar install &&\
    sh -c "wget https://get.symfony.com/cli/installer -O - | bash" &&\
    mv /root/.symfony/bin/symfony /usr/local/bin/symfony

COPY package.json ./
RUN yarn install

COPY . .
RUN yarn encore production

CMD ["symfony", "server:start", "--no-tls"]