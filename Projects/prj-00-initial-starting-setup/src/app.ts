class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputELement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
        this.hostElement = <HTMLDivElement>document.getElementById('app')!;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement; 
        this.element.id = 'user-input'; 
        
        this.titleInputELement = <HTMLInputElement>this.element.querySelector('#title')!; 
        this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description')!; 
        this.peopleInputElement = <HTMLInputElement>this.element.querySelector('#people')!; 

        this.configure();
        this.attach();
    }

    private submitHandler (event: Event) {
        event.preventDefault();
        console.log(event)
        console.log(this.titleInputELement.value)
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this))
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}


const prjInput = new ProjectInput();