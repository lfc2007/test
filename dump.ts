this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.me = this.router.routerState.snapshot.root.queryParamMap.get('me');
      }
    });
