mkdir -p logs/mongodb
mkdir -p data/mono
mkdir -p data/rs0-1
mkdir -p data/rs0-2
mkdir -p data/rs0-3
mkdir -p data/cf-0
mkdir -p data/cf-1
mkdir -p data/cf-2
killall mongod
sleep 20
mongod --config ./config/mono.conf
mongod --config ./config/rs0-1.conf
mongod --config ./config/rs0-2.conf
mongod --config ./config/rs0-3.conf
mongod --config ./config/cf0.conf
mongod --config ./config/cf1.conf
mongod --config ./config/cf2.conf