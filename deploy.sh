yarn build
tar czvf data-lake-ui.tar.gz .next ecosystem.config.js package.json
scp data-lake-ui.tar.gz pi@idbox-1.local:~/cdal 
ssh pi@idbox-1.local bash -c /home/pi/cdal/deploy.sh
rm data-lake-ui.tar.gz
