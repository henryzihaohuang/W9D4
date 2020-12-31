class FollowToggle {
    constructor(el) {
        this.$el = $(`${el}`);
        this.userId = this.$el.data('user-id'); //
        this.followState = this.$el.data('initial-follow-state');
        this.render();
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.text("Follow!");
        } else {
            this.$el.text("Unfollow!")
        }
    };

    handleClick(){
        this.$el.on("click", e => {
            e.preventDefault();

            if (this.followState === "followed"){

                return $.ajax({
                    method:"POST",
                    url: `/users/${this.userId}/follow`,
                    datatype: 'json',
                    success: () => {
                        this.$el.toggleClass(followed);
                    }
                })

            } else {
                return $.ajax({
                    method: "DELETE",
                    url: `/users/${this.userId}/follow`,
                    datatype: 'json',
                    success: () => {
                        this.$el.toggleClass(unfollowed);
                    }
                })
            }
        })

    }
}



module.exports = FollowToggle;
