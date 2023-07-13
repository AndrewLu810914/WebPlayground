# Docker install inside wsl

To install Docker inside WSL (Windows Subsystem for Linux), you can follow these steps:

1. Update the packages inside the Linux distribution by running the following commands:

   ```sh
   sudo apt-get update
   sudo apt-get upgrade
   ```

2. Install the necessary dependencies by running the following command:

   ```sh
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   ```

3. Add Docker's official GPG key by running the following command:

   ```sh
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

4. Add the Docker repository to the Linux distribution's package sources by running the following command:

   ```sh
   echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. Update the package lists again by running the command:

   ```sh
   sudo apt-get update
   ```

6. Install Docker by running the following command:

   ```sh
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

7. After the installation completes, verify that Docker is running by executing the following command:

   ```sh
   sudo docker run hello-world
   ```

If everything is set up correctly, you should see a "Hello from Docker!" message indicating that Docker is working properly.

That's it! Docker should now be installed and functional within WSL. You can start using Docker commands to manage containers and images on your system.
