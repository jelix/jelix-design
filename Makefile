
.PHONY: deploy
deploy:
	rsync -av --delete --ignore-times --checksum www/ $(JELIX_ORG_DEPLOY_SSH):$(DESIGN_JELIX_ORG_DEPLOY_DIR)

