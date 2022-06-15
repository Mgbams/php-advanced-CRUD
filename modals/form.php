<div class="modal fade" id="usermodal" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Adding or Updating Users</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span>&times;</span>
                </button>
            </div>
            <form id="addform" method="post" enctype="multipart/form-data">

                <div class="modal-body">

                    <!--username-->
                    <div class="form-group">
                        <label>Name: </label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-dark"><i class="fas fa-user-alt text-light"></i></span>
                            </div>
                            <input type="text" class="form-control" name="username" placeholder="Enter username" autocomplete="off" required="required" id="username">
                        </div>
                    </div>

                    <!--Email-->
                    <div class="form-group">
                        <label>Email: </label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-dark"><i class="fas fa-envelope-open text-light"></i></span>
                            </div>
                            <input type="email" class="form-control" name="email" placeholder="Enter your email" autocomplete="off" required="required" id="email">
                        </div>
                    </div>

                    <!--mobile-->
                    <div class="form-group">
                        <label>Mobile: </label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-dark"><i class="fas fa-mobile text-light"></i></span>
                            </div>
                            <input type="text" class="form-control" name="mobile" maxlength="10" minlength="10" placeholder="Enter your mobile" autocomplete="off" required="required" id="mobile">
                        </div>
                    </div>

                    <!--photo-->
                    <div class="form-group">
                        <label>Photo: </label>
                        <div class="input-group">
                            <label for="userphoto" class="custom-file-label">Choose file</label>
                            <input type="file" class="custom-file-input" required="required" id="userphoto" name="photo">
                        </div>
                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-dismiss="modal">Submit</button>
                    <button type="button" class="btn btn-danger">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>