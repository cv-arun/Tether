


const socketServer = (socket) => {
    console.log(`User Connected: ${socket.id}`);





    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
        

    });
}


module.exports = socketServer