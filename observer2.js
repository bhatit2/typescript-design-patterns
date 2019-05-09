class MyChannel{
    constructor(content=[], subscribers=[]){
        this.content = content;
        this.subscribers = subscribers;
    }
	update(content){
		this.content = content;
		this.notifySubscribers();
	}
	subscribe(subscriber){
		this.subscribers.push(subscriber);
	}
	notifySubscribers(){
		this.subscribers.forEach(sub=>{
			sub.message = 'new Content added to my channel';
		})
	}
	
}

class Subscriber{
	constructor(subscriptions=[]){
		this.message = '';
		this.subscriptions = subscriptions;
	}
	subscribe(channel){
		this.subscriptions.push(channel);
	}
}