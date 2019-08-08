this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.slId = this.router.routerState.snapshot.root.queryParamMap.get('slid');
        this.planNumber = this.router.routerState.snapshot.root.queryParamMap.get('planNumber');
      }
    });
