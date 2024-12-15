const amqp = require('amqplib');
const connectValue = "amqp://localhost:5672";
const queue = "rrlabs-task";

async function check() {
    const connection = await amqp.connect(connectValue);
    const channel = await connection.createChannel();
    
    try {
      await channel.assertQueue(queue);
      console.log(`Queue ${queue} asserted successfully.`);
    } catch (err) {
      console.error(`Error asserting queue ${queue}: ${err}`);
    } finally {
      await connection.close();
    }
  };


async function publish(id, description) {

    const taskObj = {
        id: id,
        description: description
    };

    let connection;
    try {
        connection = await amqp.connect(connectValue);
        const channel = await connection.createChannel();

        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(taskObj)));
        console.log(" [x] Sent '%s'", JSON.stringify(taskObj));
        await channel.close();
    } catch (err) {
        console.warn(err);
    } finally {
        if (connection) await connection.close();
    }
    
};
module.exports = { check, publish };