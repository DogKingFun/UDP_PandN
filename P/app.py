from socket import socket, AF_INET, SOCK_DGRAM
from time import sleep

s = socket(AF_INET, SOCK_DGRAM)
sleep(1)

serv_address = ("n",8001)
locaddr = ("p",8000)
s.bind(locaddr)

# send
message = 'test'
s.sendto(message.encode('utf-8'), serv_address )

# receive 
M_SIZE = 1024
rx_meesage, addr = s.recvfrom(M_SIZE)
print(rx_meesage)

s.close()
