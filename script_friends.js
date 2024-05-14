// Define the Student class
class Student {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

// Initialize data if not already present in local storage
const initializeData = () => {
    if (!localStorage.getItem('quickAdd')) {
        const studentsList1 = [
            new Student(1, 'Manuel', 'Moulton'),
            new Student(2, 'Tara', 'Thorne'),
            new Student(3, 'Emily', 'Not dining')
        ];
        localStorage.setItem('quickAdd', JSON.stringify(studentsList1));
    }

    if (!localStorage.getItem('pendingRequests')) {
        localStorage.setItem('pendingRequests', JSON.stringify([]));
    }

    if (!localStorage.getItem('friendRequests')) {
        const studentsList2 = [
            new Student(4, 'Kevin', 'Moulton'),
            new Student(5, 'Rahul', 'Thorne'),
            new Student(6, 'Prof Harmon', 'Thorne'),
            new Student(7, 'Bobilious', 'Not dining'),

        ];
        localStorage.setItem('friendRequests', JSON.stringify(studentsList2));
    }

    if (!localStorage.getItem('myFriends')) {
        localStorage.setItem('myFriends', JSON.stringify([]));
    }
};

// Utility function to render a list of students
const renderStudents = (students, containerId, actions, revealStatus = false) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';  // Clear the container
    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student-container';  // Add class for flexbox layout
        const studentText = document.createElement('div');
        studentText.className = 'student-text';  // Add class for student text
        studentText.textContent = revealStatus ? `${student.name} (${student.status})` : student.name;
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';  // Add class for button container
        actions.forEach(action => {
            const button = document.createElement('button');
            button.textContent = action.label;
            button.className = action.label.toLowerCase();  // Add class for styling
            button.addEventListener('click', () => action.handler(student.id));
            buttonContainer.appendChild(button); // Append buttons to button container
        });
        studentDiv.appendChild(studentText); // Append student text to student container
        studentDiv.appendChild(buttonContainer); // Append button container to student container
        container.appendChild(studentDiv); // Append student container to main container
    });
};




// Utility functions to get and set data in local storage
const getLocalStorageData = key => JSON.parse(localStorage.getItem(key)) || [];
const setLocalStorageData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// Handlers for Quick Add section
const addStudent = id => {
    const quickAdd = getLocalStorageData('quickAdd');
    const pendingRequests = getLocalStorageData('pendingRequests');
    const student = quickAdd.find(student => student.id === id);
    setLocalStorageData('quickAdd', quickAdd.filter(student => student.id !== id));
    setLocalStorageData('pendingRequests', [...pendingRequests, student]);
    renderSections();
};

const hideStudent = id => {
    const quickAdd = getLocalStorageData('quickAdd');
    setLocalStorageData('quickAdd', quickAdd.filter(student => student.id !== id));
    renderSections();
};

const undoStudent = id => {
    const quickAdd = getLocalStorageData('quickAdd');
    const pendingRequests = getLocalStorageData('pendingRequests');
    const student = pendingRequests.find(student => student.id === id);
    setLocalStorageData('pendingRequests', pendingRequests.filter(student => student.id !== id));
    setLocalStorageData('quickAdd', [...quickAdd, student]);
    renderSections();
};

// Handlers for Friend Requests section
const acceptStudent = id => {
    const friendRequests = getLocalStorageData('friendRequests');
    const myFriends = getLocalStorageData('myFriends');
    const student = friendRequests.find(student => student.id === id);
    setLocalStorageData('friendRequests', friendRequests.filter(student => student.id !== id));
    setLocalStorageData('myFriends', [...myFriends, student]);
    renderSections();
};

const declineStudent = id => {
    const friendRequests = getLocalStorageData('friendRequests');
    setLocalStorageData('friendRequests', friendRequests.filter(student => student.id !== id));
    renderSections();
};

const removeFriend = id => {
    const myFriends = getLocalStorageData('myFriends');
    setLocalStorageData('myFriends', myFriends.filter(student => student.id !== id));
    renderSections();
};

// Function to render all sections
const renderSections = () => {
    renderStudents(getLocalStorageData('quickAdd'), 'quick-add-section', [
        { label: 'Add', handler: addStudent },
        { label: 'Hide', handler: hideStudent }
    ]);

    renderStudents(getLocalStorageData('pendingRequests'), 'pending-section', [
        { label: 'Undo', handler: undoStudent }
    ]);

    renderStudents(getLocalStorageData('friendRequests'), 'friend-request-section', [
        { label: 'Accept', handler: acceptStudent },
        { label: 'Decline', handler: declineStudent }
    ]);

    renderStudents(getLocalStorageData('myFriends'), 'my-friends-section', [
        { label: 'Remove', handler: removeFriend }
    ], true);
};

// Initialize data and render sections on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeData();
    renderSections();
});

