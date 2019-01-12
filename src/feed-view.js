
class FeedView {
    constructor(container) {
        this.container = container;
        this.setScroll();
        this.anchorChatElement = null;
        this.anchorChatElementPrevScrollTop = null;
        container.addEventListener('scroll', this.setScroll.bind(this));
    }

    update() {
        if (this.sticky) {
            this.container.scrollTop = this.container.scrollHeight - this.container.clientHeight;
        }
        else if (this.anchorChatElement
            && this.anchorChatElement.scrollTop > this.anchorChatElementPrevScrollTop) {

            this.container.scrollTop += this.anchorChatElement.scrollTop - this.anchorChatElementPrevScrollTop
        }
    }

    setScroll() {
        var verticalPadding = this.container.offsetHeight > this.container.clientHeight;
        var threshold = this.container.scrollHeight - verticalPadding / 2 - 10;
        this.sticky = this.container.scrollTop + this.container.clientHeight > threshold;
        this.anchorChatElement = Array.from(this.container.children)
            .find(c => c.offsetTop > this.container.scrollTop)
            || null;
        this.anchorChatElementPrevScrollTop = this.anchorChatElement
            ? this.anchorChatElement.scrollTop
            : null;
    }
}

module.exports = FeedView;
