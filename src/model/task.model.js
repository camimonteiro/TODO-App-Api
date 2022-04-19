var id = 0;
class Task {
    constructor (title, description, status, creationDate){
        this.id = ++id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.creationDate = new Date();
    }
}

module.exports = Task;