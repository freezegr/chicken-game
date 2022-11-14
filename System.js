class System {
    constructor(){
        this.elements = {
            image: document.getElementById("chicken"),
            money: document.getElementById("money"),
        };
        this.buttons = [
            {
                id: 'first',
                type: 'perClick',
                addPerClickSum: 1,
                element: document.getElementById("firstButton"),
                upgradeMoney: 10//parseInt(document.getElementById("firstButton").innerText.split(' ')[2].replace(/[^0-9]/g, ''))
            },
            {
                id: 'second',
                type: 'perClick',
                addPerClickSum: 2,
                element: document.getElementById("SecondButton"),
                upgradeMoney: 15//parseInt(document.getElementById("SecondButton").innerText.split(' ')[2].replace(/[^0-9]/g, ''))
            },
            {
                id: 'third',
                type: 'perSecond',
                addPerSecondSum: 1,
                element: document.getElementById("SecondButton"),
                upgradeMoney: 50//parseInt(document.getElementById("SecondButton").innerText.split(' ')[2].replace(/[^0-9]/g, ''))
            },
            {
                id: '4th',
                type: 'perSecond',
                addPerSecondSum: 2,
                element: document.getElementById("SecondButton"),
                upgradeMoney: 75//parseInt(document.getElementById("SecondButton").innerText.split(' ')[2].replace(/[^0-9]/g, ''))
            },
        ]
        this.money = parseInt(this.elements.money.innerText.replace(/[^0-9]/g, ''));
        this.moneyPerClick = 1
        this.moneyPerSecond = 0

        setInterval(() => {
            this.money = this.money + this.moneyPerSecond
            this.elements.money.innerText = `kotorizotalira: ${this.money}🍗`;
        }, 1000);
    }

    addMoneyOnClick(){
        this.money = this.money + this.moneyPerClick
        this.elements.money.innerText = `kotorizotalira: ${this.money}🍗`;
    }

    addPerClickMoney(button){
        let thisButton = this.buttons.filter(x => x.id == button)[0]
        if(thisButton.type != 'perClick') return;
        if(this.money < thisButton.upgradeMoney) return alert('You dont have enough money.')
        this.money = this.money - thisButton.upgradeMoney
        this.moneyPerClick = this.moneyPerClick + thisButton.addPerClickSum
        this.elements.money.innerText = `kotorizotalira: ${this.money}🍗`;
    }

    addPerSecondMoney(button){
        let thisButton = this.buttons.filter(x => x.id == button)[0]
        if(thisButton.type != 'perSecond') return;
        if(this.money < thisButton.upgradeMoney) return alert('You dont have enough money.')
        this.money = this.money - thisButton.upgradeMoney
        this.moneyPerSecond = this.moneyPerSecond + thisButton.addPerSecondSum
        this.elements.money.innerText = `kotorizotalira: ${this.money}🍗`;
    }

    refreshMoney(){
        this.money = 0
        this.elements.money.innerText = `kotorizotalira: ${this.money}🍗`;
    }
    
    refreshAll(){
        this.money = 0
        this.elements.money.innerText = `kotorizotalira: ${this.money}🍗`;
        this.moneyPerClick = 1
        this.moneyPerSecond = 0
    }

}