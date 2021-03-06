function render(rootElement, createObject) {
    if (typeof createObject.type === 'object') {
        render(rootElement, createObject.type.display(createObject.props));
    } else {
        let myElement = document.createElement(createObject.type);
        if (!Array.isArray(createObject)) {
            for (const prop of Object.keys(createObject.props)) {
                myElement.setAttribute(prop.toString(), createObject.props[prop].toString())
            }
            if (createObject.event) {
                for (const event of Object.values(createObject.event)) {
                    myElement.addEventListener(event.name, event);
                }
            }

        }

        if (Array.isArray(createObject)) {
            createObject.forEach(element => {
                render(document.getElementById('root'), element)
            })
        }

        if (typeof createObject.childElement === 'string') {
            let nodeText = null;
            if (createObject.childElement.includes("{")) {
                let child = createObject.childElement.interpolate(createObject);
                nodeText = document.createTextNode(child);
            } else {
                nodeText = document.createTextNode(createObject.childElement);
            }
            myElement.appendChild(nodeText);

        } else if (createObject.childElement === undefined) {
            console.log("no children");
        } else {
            if (Array.isArray(createObject.childElement)) {
                createObject.childElement.forEach(element => {
                    render(myElement, element);
                });
            } else {
                render(myElement, createObject.childElement);
            }
        }
        //génération du DOM
        return (
            rootElement.appendChild(myElement)
        )
    }
}


export const ReactDom = {
    render
}